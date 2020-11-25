export const hasChildren = (item) =>
  Boolean(item.children && item.children.length);

export const isOpen = (id, selectedItems) => Boolean(selectedItems[id]);
