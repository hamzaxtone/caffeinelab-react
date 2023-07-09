import AdminLayout from "./AdminLayout";
import Default from "./default";
import WithoutHeaderFooter from "./withoutHeaderFooter";
import IpadHeaderFooterHideLayout from "./ipadHeaderFooterHideLayout";


export const Layouts = {
  Default: Default,
  Admin: AdminLayout,
  WithoutHeaderFooter:WithoutHeaderFooter,
  IpadHeaderFooterHideLayout:IpadHeaderFooterHideLayout
};
export type LayoutKeys = keyof typeof Layouts; 

//export default Layouts; 
