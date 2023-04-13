import React from "react";
import Appbar from "../Appbar/Appbar";
import Footer from "../Footer/Footer";
import CardCarousel from "./CardCarousel";
import GiamGia from "./GiamGia";
import WelcomeDashboard from "./WelcomeDashboard";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { Avatar, Button, Card, Grid, Stack, Typography } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import { unstable_useId as useId } from "@mui/utils";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersActionBarProps } from "@mui/x-date-pickers/PickersActionBar";
import {
  useLocaleText,
  WrapperVariantContext,
} from "@mui/x-date-pickers/internals";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";

const LabelStyle = styled(Typography)(() => ({
  color: "green",
  marginBottom: "8px",
}));

const CustomActionBar = (props: PickersActionBarProps) => {
  const navigate = useNavigate();
  const { onAccept, onClear, onCancel, onSetToday, actions } = props;
  const wrapperVariant = React.useContext(WrapperVariantContext);
  const localeText = useLocaleText();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = useId();

  const actionsArray =
    typeof actions === "function" ? actions(wrapperVariant) : actions;

  if (actionsArray == null || actionsArray.length === 0) {
    return null;
  }

  const menuItems = actionsArray?.map((actionType) => {
    switch (actionType) {
      case "clear":
        return (
          <MenuItem
            data-mui-test="clear-action-button"
            onClick={() => {
              onClear();
              setAnchorEl(null);
            }}
            key={actionType}
          >
            {localeText.clearButtonLabel}
          </MenuItem>
        );
      case "cancel":
        return (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              onCancel();
            }}
            key={actionType}
          >
            {localeText.cancelButtonLabel}
          </MenuItem>
        );
      case "accept":
        return (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              onAccept();
            }}
            key={actionType}
          >
            {localeText.okButtonLabel}
          </MenuItem>
        );
      case "today":
        return (
          <MenuItem
            data-mui-test="today-action-button"
            onClick={() => {
              setAnchorEl(null);
              onSetToday();
            }}
            key={actionType}
          >
            {localeText.todayButtonLabel}
          </MenuItem>
        );
      default:
        return null;
    }
  });

  return (
    <DialogActions>
      <Button
        id={`picker-actions-${id}`}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        Actions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": `picker-actions-${id}`,
        }}
      >
        {menuItems}
      </Menu>
    </DialogActions>
  );
};

export default function HomeCustome() {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [valuee, setValuee] = React.useState<Dayjs | null>(() =>
    dayjs("2022-02-01T00:00")
  );

  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);
  const [valueTime, setValueTime] = React.useState<Dayjs | null>(null);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Appbar />
      <Box>
        {/* <Grid style={{ marginTop: "20px" }} container spacing={3}>
          <Grid item xs={12} md={8}> */}
             <Card sx={{ p: 3 }}>
          <Stack spacing={3}>
            <LabelStyle
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              TÌM KIẾM NHANH{" "}
              <Grid item xs={3}>
                  <Box
                    sx={{ minWidth: 200 }}
                    style={{ marginTop: "20px", textAlign: "center" }}
                  >
                    <FormControl style={{ width: "300px" }}>
                      <InputLabel id="demo-simple-select-label">Giá</InputLabel>
                      <Select
                        style={{ borderRadius: "25px" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                     <MenuItem value={50000}>Thấp hơn 50.000/Ngày</MenuItem>
                        <MenuItem value={100000}>Thấp hơn 100.000/Ngày</MenuItem>
                        <MenuItem value={200000}>Thấp hơn 200.000/Ngày</MenuItem>
                        <MenuItem value={300000}>Thấp hơn 300.000/Ngày</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
            </LabelStyle>
           

            <Box style={{ display: "flex", justifyContent: "center" }}>
              

             
            </Box>
          </Stack>
          <Box style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              style={{ background: "red" }}
              onClick={() => {
                navigate("result");
              }}
            >
              Tìm kiếm
            </Button>
          </Box>
        </Card>
      </Box>
      <div style={{ marginTop: "40px" }}></div>
      <GiamGia />
      <div style={{ marginTop: "40px" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LabelStyle
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "30px",
            marginLeft: "30px",
          }}
        >
          Tin nổi bật{" "}
        </LabelStyle>
        <button
          style={{
            marginRight: "30px",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
          onClick={() => {
            navigate("/article");
          }}
        >
          Xem hết
        </button>
      </div>
      <div style={{ marginTop: "40px" }}>
        <CardCarousel />
      </div>
      <div style={{ marginTop: "40px" }}></div>
      <WelcomeDashboard />
      <div style={{ marginTop: "20px" }}></div>
      <Footer />
    </>
  );
}
