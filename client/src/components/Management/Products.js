import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import "./Products.css";
import Backdrop from "../UI/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import {
  addMenuItem,
  deleteItem,
  editMenuItem,
  fetchMenuItems,
} from "../../store/manageStore";
import {
  deleteMenuItem,
  editMenuItemServer,
  sendMenuItems,
} from "../../store/manage-store-actions";
import { showNotification } from "../../store/ui-slice";
function Products(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.manageStoreReducer.menuItems);
  const [newEventBox, newEventBoxHandler] = useState(false);

  const [productId, productIdHandler] = useState("");
  const [productEnName, productEnNameHandler] = useState("");
  const [productHeName, productHeNameHandler] = useState("");
  const [productPrice, productPriceHandler] = useState("");
  const [productType, productTypeHandler] = useState("");
  const [emptyField, emptyFieldHandler] = useState({
    enName: false,
    heName: false,
    price: false,
    type: false,
  });

  const [editMode, editModeHandler] = useState(false);

  function showNewProductBox() {
    newEventBoxHandler(!newEventBox);
  }
  function cleanInputs() {
    productEnNameHandler("");
    productHeNameHandler("");
    productPriceHandler("");
    productTypeHandler("");

    emptyFieldHandler({
      enName: false,
      heName: false,
      price: false,
      type: false,
    });
  }
  function addProduct() {
    const emptyEnName = productEnName !== "";
    const emptyHeName = productHeName !== "";
    const emptyPrice = productPrice !== "";
    const emptyType = productType !== "";

    if (emptyEnName && emptyHeName && emptyPrice && emptyType) {
      const tempProduct = {
        nameEn: productEnName,
        nameHe: productHeName,
        quantity: 1,
        cost: productPrice,
        type: productType,
      };

      if (dispatch(addMenuItem(tempProduct))) {
        dispatch(sendMenuItems(tempProduct));
        dispatch(
          showNotification({
            type: "success",
            notification: "New product added to DB",
          })
        );
        dispatch(cleanInputs());
      } else {
        dispatch(
          showNotification({
            type: "error",
            notification: "Problems with Backend",
          })
        );
      }
    } else {
      dispatch(
        showNotification({
          type: "error",
          notification: "Empty fields",
        })
      );

      emptyFieldHandler({
        enName: productEnName === "",
        heName: productHeName === "",
        price: productPrice === "",
        type: productType === "",
      });
    }
  }

  function openEditUi(item) {

    productIdHandler(item.id);
    productEnNameHandler(item.enName);
    productHeNameHandler(item.heName);
    productPriceHandler(item.price);
    productTypeHandler(item.type);

    editModeHandler(true);
  }

  function editProduct() {


      dispatch(editMenuItem({

        menuItemId:productId,
        nameEn : productEnName,
        nameHe : productHeName,
        quantity:1,
        cost : productPrice,
        type: productType
      }));

      if(
        dispatch(editMenuItemServer({

          menuItemId:productId,
          nameEn : productEnName,
          nameHe : productHeName,
          quantity:1,
          cost : productPrice,
          type: productType
        }))
      ){

        dispatch(
          showNotification({
            type: "success",
            notification: "Product has successfully changed",
          })
        );

        // dispatch(fetchMenuItems());
      } else {

        dispatch(
          showNotification({
            type: "error",
            notification: "Something went wrong with DB",
          })
        );
      }
      
  }

  console.log(products);
  return (
    <Box className="management-products">
      {/* Add Product Button */}
      <Paper
        className="add-product"
        sx={{ color: "black" }}
        onClick={showNewProductBox}
      >
        {props.language
          ? newEventBox
            ? "סגור"
            : "הוסף מוצר"
          : newEventBox
          ? "Close"
          : "Add Product"}
      </Paper>
      {/* Add Product Interface */}
      <Paper className={newEventBox ? "new-product-box" : "none"}>
        <TextField
          className="new-event-input"
          error={emptyField.enName}
          label={props.language ? "שם באנגלית" : "Name in English"}
          value={productEnName}
          onChange={(event) => productEnNameHandler(event.target.value)}
        ></TextField>
        <TextField
          className="new-event-input"
          error={emptyField.heName}
          label={props.language ? "שם בעברית" : "Name in Hebrew"}
          value={productHeName}
          onChange={(event) => productHeNameHandler(event.target.value)}
        ></TextField>
        <TextField
          className="new-event-input"
          error={emptyField.price}
          type="number"
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
          value={productPrice}
          onChange={(event) => productPriceHandler(event.target.value)}
          label={props.language ? "מחיר" : "Price"}
        ></TextField>
        <TextField
          className="new-event-input"
          select
          error={emptyField.type}
          label={props.language ? "סוג המוצר" : "Type of Product"}
          value={productType}
          onChange={(event) => productTypeHandler(event.target.value)}
        >
          <MenuItem value={"kitchen"}>
            {props.language ? "מטבח" : "Kitchen"}
          </MenuItem>
          <MenuItem value={"bakery"}>
            {props.language ? "מאפים" : "Bakery"}
          </MenuItem>
          <MenuItem value={"drinks"}>
            {props.language ? "שתייה" : "Drinks"}
          </MenuItem>
        </TextField>

        <Box>
          <Button variant="outlined" color="success" onClick={addProduct}>
            <Typography variant="p">
              {props.language ? "הוסף" : "Add"}
            </Typography>
          </Button>
        </Box>
      </Paper>
      <Box className="products-main">
        <Box className="product-middle" sx={{ fontWeight: "600" }}>
          <Box className="column">שם מוצר</Box>
          <Box className="column">מחיר</Box>
          <Box className="column">סוג המוצר</Box>
        </Box>
        {products.map((product) => (
          <Paper className="product-list">
            <Button
              variant="outlined"
              color="success"
              onClick={() =>
                // dispatch(
                // deleteItem(product._id),
                // dispatch(deleteMenuItem(product._id))
                // )
                openEditUi({
                  id : product._id,
                  enName: product.nameEn,
                  heName: product.nameHe,
                  price: product.cost,
                  type: product.type,
                })
              }
            >
              <EditIcon />
            </Button>
            <Paper className="product-middle">
              <Box className="column">
                {props.language ? product.nameHe : product.nameEn}
              </Box>
              <Box className="column">{product.cost}</Box>
              <Box className="column">{product.type}</Box>
            </Paper>
            <Button
              variant="outlined"
              color="error"
              onClick={() =>
                dispatch(
                  deleteItem(product._id),
                  dispatch(deleteMenuItem(product._id))
                )
              }
            >
              X
            </Button>
          </Paper>
        ))}
      </Box>
      <Box className={editMode ? "backdrop" : "none"}>
        <div className={"edit-product-box"}>
          <TextField
            className="new-event-input"
            error={emptyField.enName}
            label={props.language ? "שם באנגלית" : "Name in English"}
            value={productEnName}
            onChange={(event) => productEnNameHandler(event.target.value)}
          ></TextField>
          <TextField
            className="new-event-input"
            error={emptyField.heName}
            label={props.language ? "שם בעברית" : "Name in Hebrew"}
            value={productHeName}
            onChange={(event) => productHeNameHandler(event.target.value)}
          ></TextField>
          <TextField
            className="new-event-input"
            error={emptyField.price}
            type="number"
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
            value={productPrice}
            onChange={(event) => productPriceHandler(event.target.value)}
            label={props.language ? "מחיר" : "Price"}
          ></TextField>
          <TextField
            className="new-event-input"
            select
            error={emptyField.type}
            label={props.language ? "סוג המוצר" : "Type of Product"}
            value={productType}
            onChange={(event) => productTypeHandler(event.target.value)}
          >
            <MenuItem value={"kitchen"}>
              {props.language ? "מטבח" : "Kitchen"}
            </MenuItem>
            <MenuItem value={"bakery"}>
              {props.language ? "מאפים" : "Bakery"}
            </MenuItem>
            <MenuItem value={"drinks"}>
              {props.language ? "שתייה" : "Drinks"}
            </MenuItem>
          </TextField>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
          <Box>
            <Button variant="outlined" color="success"
             onClick={editProduct}>
              <Typography variant="p">
                {props.language ? "שמור" : "Save"}
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="error"
              onClick={() => editModeHandler(false)}
            >
              <Typography variant="p">
                {props.language ? "סגור" : "Close"}
              </Typography>
            </Button>
          </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default Products;
