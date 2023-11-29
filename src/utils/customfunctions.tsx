//FOR GETTING 1ST LETTER OF EACH WORD
export function getFirstLetters(input: string): string {
    const words = input.split(" ");
    const firstLetters = words.map(word => word.charAt(0));
    return firstLetters.join("");
}
