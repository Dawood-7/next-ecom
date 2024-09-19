const AdminHeader = () => {
  return (
    <header className="bg-white">
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8 md:gap-10 p-4 sm:h-[60px] shadow-lg">
        <li className="p-2 hover:bg-slate-950 hover:text-slate-50 hover:rounded-lg">
          <a href="/admin">Dashboard</a>
        </li>
        <li className="p-2 hover:bg-slate-950 hover:text-slate-50 hover:rounded-lg">
          <a href="/admin/users">Users</a>
        </li>
        <li className="p-2 hover:bg-slate-950 hover:text-slate-50 hover:rounded-lg">
          <a href="/admin/products">Products</a>
        </li>
      </ul>
      <div className="h-0.5 bg-slate-950"></div>
    </header>
  );
};
export default AdminHeader;
