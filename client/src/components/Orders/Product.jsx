import * as React from "react";
import "./Product.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid, Box } from "@mui/material";
// import { render, Document, Text } from 'redocx'
// import { read, utils, writeFile } from 'xlsx';

export default function Product(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));



  return (
    // 
    <Box className="page_product">
      <Grid
        container
        alignItems="center"
        width="auto"
        gap={0.5}
        justifyContent="space-around"
        marginBottom="20px"
      >
        <Grid className="img" item xs={6}>
          <img src={"./img/download.jpeg"} alt="img" />
        </Grid>

        <Grid container direction="column" item xs={4} gap={3}>
          <Item>{"הכנה"}</Item>

          <Item>{"שם המנה"}</Item>
        </Grid>
      </Grid>
      {itemData.map((item) => (
        <Grid container spacing={4} key={item.id} alignItems="center">
          <Grid item xs={3}>
            <img src={item.img} style={{ width: "14vw", height: "20vh" }} />
          </Grid>
          <Grid item xs={3}>
            <Item>{item.details}</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>{item.quantity}</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>{item.name}</Item>
          </Grid>
        </Grid>
      ))}
      {/* <Document>
        <Table headers={HEADERS} data={DATA} style={tableStyle} />
      </Document> */}

    </Box>
  );
}

const itemData = [
  {
    id: "111",
    name: "סלט חלומי",
    img: require("./img/MUTZAR_PAGE_381x377_0004s_0002_SALAD_HALOUMI_JUL_0015_B.webp"),
    details: "להכין סלט חלומי",
    quantity: "3",
  },
  {
    id: "112",
    name: "סלט טונה",
    img: require("./img/MUTZAR_PAGE_381x377_0004s_0003_SALAD_TUNA_JUL_0069_B.webp"),
    details: "להכין סלט טונה",
    quantity: "5",
  },
  {
    id: "113",
    name: "בוקר שקשוקה",
    img: require("./img/MUTZAR_PAGE_381x377_BREAKFAST_0000s_0003_5_AROMA_BREAKFAST_SHAKSHUKA_2.webp"),
    details: "לשים רוטב שקשוקה ובייצים במחבת ולכסות",
    quantity: "6",
  },
];
