import { CartProps } from "../context/CartContext";

export function formatCart(items: CartProps[], total: string): string {
  let message = "Olá, tudo bem? 😊 \nSegue meu pedido abaixo:\n";

  items.forEach((item) => {
    message += `\n${item.amount} ${item.title}: ${item.total.toLocaleString("pt-BR",{style: "currency",currency: "BRL",})}`;
  });

  return message + `\n\nTotal geral: ${total}`;
}
