import BaseButton from "./baseButton";

/**
 * UploadButtonBaseClass extends BaseButton and provides functionality for file upload buttons.
 * It handles file selection, upload, and post-upload operations, integrating with backend APIs and UI updates.
 */
export default class UploadButtonBaseClass extends BaseButton {
    /**
     * Initializes the UploadButtonBaseClass instance.
     * @param {Object} props - Properties passed to the upload button component.
     */
    constructor(props) {
        super(props);
    }

    /**
     * Creates file information object based on the selected file.
     * Generates a unique file path and preview URL for the selected file.
     * @param {Event} event - The file input change event.
     * @returns {Object} The file information object.
     */
    createFileInfo(event) {
        const currentDate = new Date();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        let newDay = `${Math.floor(Math.random() * 9999)}-${month + day}`;
        let path = "images/" + newDay + event.target.files[0].name;

        this.fileInfo = {
            selectedFile: event.target.files[0],
            path: path,
            pic: URL.createObjectURL(event.target.files[0]) // Generate preview URL for the file.
        };

        this.setState({ ...this.fileInfo });
        return this.fileInfo;
    }

    /**
     * Prepares an operation based on the `prepareOnChange` prop.
     * Sets up the object to be updated and cleaned.
     */
    async prepareOnChange() {
        let obj = await this.operationsFactory.prepare({
            prepare: { ...this.props.prepareOnChange },
            clean: true
        });
        obj = obj[0];
        this.obj = obj;
    }

    /**
     * Handles the file input change event.
     * Processes the selected file, uploads it, and updates the associated component states.
     * @param {Event} event - The file input change event.
     * @returns {string|undefined} The URL of the uploaded file if applicable.
     */
    async changeHandler(event) {
        await this.createFileInfo(event);

        if (this.props.prepareOnChange) {
            await this.prepareOnChange();
        }

        if (this.props.callBackFunc) {
            await this.props.callBackFunc(this.obj, this.fileInfo);
        }

        let pic;

        // Upload the selected file to the backend.
        await this.APIService.uploadPics(this.fileInfo.selectedFile, this.fileInfo.path);

        if (!this.obj.getPicSrc) {
            // Download the uploaded file if no picture source is provided.
            pic = await this.APIService.downloadPics(this.fileInfo.path);

            if (!this.props.skipUpdate && !this.state.skipUpdate) {
                if (this.obj?.length) {
                    // Update the state of each object in the array.
                    for (let comp of this.obj) {
                        await comp.setCompState({ [this.props.uploadAttribute || "picURL"]: pic });
                    }
                } else {
                    // Update the state of a single object.
                    await this.obj.setCompState({ [this.props.uploadAttribute || "picURL"]: pic });
                }
            }

            if (this.props.downloadPicsCallBackFunc) {
                this.props.downloadPicsCallBackFunc(this.obj, this.fileInfo);
            }
        }

        if (this.props.runOnChange) {
            this.onSubmit();
        }

        return pic;
    }

    /**
     * Handles the submission of the form after a file is uploaded.
     * Executes additional operations and calls the finish callback function if provided.
     */
    async onSubmit() {
        if (this.props.prepareOnChange) {
            await this.operationsFactory.addToComponentList();
        }
        await this.obj.update();

        if (this.props.finishCallBackFunc) {
            this.props.finishCallBackFunc(this.obj);
        }

        this.dispatch({ imgUploaded: this.obj });
    }

    /**
     * Sets up additional styles and attributes for the upload button.
     * Configures wrapper, label, and form elements with appropriate properties.
     */
    additionalSetup() {
        this.wrapper.setStyle({ maxWidth: "300px", maxHeight: "30px", width: "fit-content" });
        this.label.setStyle({
            display: "inline-block",
            height: "35px",
            maxWidth: "fit-content",
            cursor: "pointer",
            position: "relative"
        });

        this.form.updateProps({
            accept: "image/png, image/gif, image/jpeg, image/jpg, image/webp, image/svg+xml",
            style: {
                position: 'absolute', // Set position to absolute to make it fill the entire label.
                top: 0,
                left: 0,
                cursor: "pointer",
                width: '100%',
                height: '100%',
                opacity: 0,
            },
            size: "6",
            type: "file",
            name: "file",
            onChange: this.changeHandler
        });
    }

    /**
     * Generates the inner content for the upload button, including error text if provided.
     * @returns {Array} The inner content of the button.
     */
    getInnerContent() {
        let formContent = this.getFormHtml();
        this.innerContent = [
            this.label.getHtml({ content: formContent, type: "label" }),
            this.props.errorText && this.error.getHtml()
        ];
        return this.innerContent;
    }

    /**
     * Generates and returns the HTML structure for the upload button.
     * Includes the content and form element inside a styled container.
     * @returns {JSX.Element} The HTML structure for the button.
     */
    getFormHtml() {
        this.content = this.props.content || <>Upload</>;
        return (
            <div className={this.props.containerStyle || "defaultButton"}>{this.content}
                {this.form.getHtml({ type: "input" })}
            </div>
        );
    }
}

/**
 * should compress photos as well.
 * and use themes. fix the div that hard codes the class.
 */