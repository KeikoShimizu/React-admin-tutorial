import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const MyUrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  console.log("これ", record);
  return record ? (
    <Link href={record[source]} sx={{ textDecoration: "none" }}>
      {record[source]}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  ) : null;
};

export default MyUrlField;

//===MEMO===
//自分でcostomizeすることもできる.React-adminのcomponentがデザインと合わない場合は作るといい

//===STYLING===
//Google material design guidlines https://m3.material.io/
//sx propsで渡す stylesと同じ
