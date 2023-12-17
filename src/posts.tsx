import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
} from "react-admin";

export const PostList = () => (
  <List>
    {/* <Datagrid rowClick="edit"> */}
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      {/* <TextField source="body" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

//===MEMO===
// ReferenceField => reference dataをfetchしてRecordContextを作る。そしてrecord representationとしてレンダーする。

//columnがuserID, id, title, bodyの4つのtitleを持ったcolumnで構成されている

//EditButton => Edit できる
