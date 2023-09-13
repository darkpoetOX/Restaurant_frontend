const SideBar = ({show}) => {
  //    11 mins 50 tells you about react icons
  return (
    <div className={show ? 'sidenav active':'sidenav'}>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
        </ul>
    </div>
  );
}
export default SideBar;