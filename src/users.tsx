import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";
import MyUrlField from "./MyUrlField";

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          {/* <TextField source="address.street" /> */}
          <TextField source="phone" />
          {/* <UrlField source="website" /> */}
          <MyUrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};

// ===MEMO===
// List => data fetching
// <List> has 1 children
// SimpleListはMaterial UIを使っている
//SimpleListはresponsiveに対応
// MaterialUI => https://mui.com/material-ui/react-list/
// primaryText,secondaryText,tertiaryTextはexpect functions props

// Fieldは表示するdataに適切に使い分けることで、atagになったりするから選ぶこと
// (text, email, url, image,array, relationship, HTML ....)
//MyUrlFieldのようにdesignがreact-adminのものと合わない場合はカスタマイズで自分で作ってもできる
