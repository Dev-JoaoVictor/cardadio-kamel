export function generateWhatsAppLink(message: string): string {
  const phoneNumber = "5511957665838";
  const baseUrl = "https://api.whatsapp.com/send";
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?phone=${encodedPhoneNumber}&text=${encodedMessage}`;
}
