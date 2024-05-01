import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full max-w-7xl h-20 flex items-center justify-between px-5 mx-auto bg-pink-200">
      <Link to='https://www.google.com.br' target="_blank" className="text-sm border-b-2 border-b-blue-300">@Confeitaria Kamel</Link>
      <p className="text-xs"> @2024 - todos os direitos reservados</p>
    </footer>
  )
}