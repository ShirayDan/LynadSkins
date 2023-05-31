import styles from "./Filters.module.css";
import { List } from "../../../../../../ui/List";
import { ListItem } from "../../../../../../ui/ListItem";
export const Filters = ({ setOpen, setFilter }) => {
  const filterModalClick = (text) => {
    setOpen(false);
    setFilter(text);
  };
  const filterParams = [
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
    "Float: Low to High",
    "Float: High to Low",
  ];
  return (
    <div className={styles["filters-container"]}>
      <List variant={"ul"}>
        {filterParams.map((item) => {
          return (
            <ListItem onClick={() => filterModalClick(item)}>{item}</ListItem>
          );
        })}
      </List>
    </div>
  );
};
