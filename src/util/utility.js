export default {
  getUniqueUserId() {
    return "ttusr-" + this.getId();
  },
  getUniqueBlogId() {
    return "ttblg-" + this.getId();
  },
  getId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 9);
  }
}