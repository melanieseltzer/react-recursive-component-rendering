export const hasChildren = (item) =>
  Boolean(item.children && item.children.length);

export const isOpen = (id, selectedItems) => Boolean(selectedItems[id]);

export const getLeveledPadding = (level) => ({
  paddingLeft: `${level} * 30px`
});
