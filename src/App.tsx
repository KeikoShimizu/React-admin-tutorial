import { Admin, Resource, ListGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList } from "./posts";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="posts" list={PostList} />
    {/* <Resource name="users" list={UserList} /> */}
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
);

//===MEMO===
// dataprovider is adapter between device and API. So react-admin become adapter role.
// dataproviderはuserのActionをHTTPrequestにtranslateしてBackend APIが理解できるようにするのが役割。

// Resource (List, create, edit, show)のOptionをもてる
// ここではListなのでdisplayをする（userというDtataを）
// nameはname of fetch data => usersというdataをfetchする (同時にsidebarにusersとPostsのcollectionが増える)

//list => ここには使うdataをListするcomponentを設定する
// ListGuesser (ListGueser componentを使ってlistをdisplayする)

// recordRepresentation =>
// これを入れることで、postsがUserIDをdisplayするときに、userIdとしているところを、nameで表示が可能になる。
//<ReferenceField source="userId" reference="users" />  posts.tsx
