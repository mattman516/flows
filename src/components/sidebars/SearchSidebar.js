import React from "react";
import Sidebar from "./Sidebar";
import SidebarList from "./SidebarList";
import Searchbar from "../Searchbar";
import Divider from "@material-ui/core/Divider";

const SearchSidebar = ({
  isSearchOpen,
  searchedItems,
  item,
  handleSidebarClose,
  handleSearchAction
}) => (
  <Sidebar
    variant="persistent"
    anchor="right"
    open={isSearchOpen}
    handleSidebarClose={() => handleSidebarClose()}
    components={
      <div>
        <Divider />
        <Searchbar item={item} handleSearchAction={handleSearchAction} />
        <SidebarList items={searchedItems} />
      </div>
    }
  />
);

export default SearchSidebar;
