export default function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between flex-row">
            <p className="text-slate-400">&copy; Kenneth Fechter - {(new Date().getFullYear())}, All Rights Reserved.</p>
        </div>
    </footer>
  )
}
