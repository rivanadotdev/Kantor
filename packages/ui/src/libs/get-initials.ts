export function getInitials(name: string): string {
  if (!name.trim()) return "";

  const words = name.split(" ").filter(word => word !== ""); // Split by spaces and filter out empty strings
  return words.map(word => word[0].toUpperCase()).join("");
}
