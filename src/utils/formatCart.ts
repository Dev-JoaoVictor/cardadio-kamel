import { CartProps } from "../context/CartContext";

export function formatCart(items: CartProps[], total: string): string {
  let message = "Meu pedido:\n";

  items.forEach((item) => {
    message += `\n${item.amount} - ${item.title} = ${item.total.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    )}.\n`;
  });

  return message + `\nTotal geral: ${total}`;
}
