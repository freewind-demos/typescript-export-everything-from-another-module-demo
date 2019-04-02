export function toUpper(str: string) {
  return str.toUpperCase();
}

export default function hello(str: string) {
  return `Hello, ${toUpper(str)}`
};
