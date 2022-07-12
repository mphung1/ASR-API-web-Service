import { Link, Outlet } from "react-router-dom";

interface LinkItemProps {
  name: string;
  path: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Search", path: "/Demo" },
  { name: "Upload", path: "/Demo/Upload" },
  { name: "By URL", path: "/Demo/ByUrl" },
  { name: "Google Drive", path: "/Demo/GoogleDrive" },
];

function Layout() {
  return (
    <>
      <nav>
        <ul>
          {LinkItems.map((link) => (
            <li>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

export default Layout;
