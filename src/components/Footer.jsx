function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-6xl px-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Ethnic Media Canada. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
