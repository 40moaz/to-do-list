import { useAppDispatch, useAppSelector } from "../../store/hooks";

import DarkMode from "./DarkMode";
import DeleteTasks from "./DeleteTasks";
import LayoutMenus from "../Utilities/LayoutMenus";
import React from "react";
import TasksDone from "./TasksDone";
import avatar1 from "../../assets/avatar-1.jpg";
import { menusActions } from "../../store/Menu.store";

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);

  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };

  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="p-5 flex flex-col h-full">
        <span className="flex items-center mx-auto">
          <span className="font-medium">Hi, User!</span>
        </span>

        <DarkMode />

        <TasksDone />
        <DeleteTasks />
        <a
          href="https://www.linkedin.com/in/moaz-ali-9764662a3/"
          className="mt-4 bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200 dark:bg-slate-700/[.3] dark:text-slate-200"
        >
          made by Moaz Ali
        </a>
      </section>
    </LayoutMenus>
  );
};

export default AccountData;
