const generateDefaultPassword = () => {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }

module.exports = generateDefaultPassword;