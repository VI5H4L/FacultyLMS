const isLNMIITEmail = (email) => {
    // Regular expression to validate the email format
    const emailRegex = /^[^\s@]+@lnmiit\.ac\.in$/i;
    
    // Check if the email matches the regex
    return emailRegex.test(email);
}

module.exports = isLNMIITEmail;