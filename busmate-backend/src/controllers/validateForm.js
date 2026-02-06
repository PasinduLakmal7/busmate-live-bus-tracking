const {formSchema} = require("@busmate/common")

const validateForm = async (req, res) => {
    const formData = req.body;

    try {
        await formSchema.validate(formData);
        
        console.log("Form is valid");
        res.status(200).json({ message: "Validation successful" });
        
    } catch (error) {
        console.log("Validation Error:", error.errors);
        res.status(422).json({ error: error.errors[0] });
    }
};

module.exports = validateForm;