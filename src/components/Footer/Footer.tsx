import React from "react";
import {
  BoxFooter,
  ContainerFooter,
  FooterLink,
  HeadingFooter,
} from "./FooterStyles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Grid, TextField, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default function Footer() {
  return (
    <BoxFooter>
      <ContainerFooter>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <HeadingFooter>Về Chúng Tôi</HeadingFooter>
            <FooterLink href="#">
              <Typography style={{ color: "white" }}>
              Đây là một nơi được thiết kế để cung cấp các dịch vụ chăm sóc và lưu trú cho các loại chim cảnh. Điều này bao gồm việc cung cấp các phương tiện vận chuyển an toàn, các khu vực lưu trú rộng rãi và thoải mái, và các dịch vụ chăm sóc sức khỏe và dinh dưỡng chuyên nghiệp. Trung tâm dịch vụ lưu trú chim cảnh cung cấp môi trường an toàn và thuận tiện để các chủ sở hữu chim cảnh có thể giữ chúng trong thời gian ngắn hạn hoặc dài hạn mà không cần phải lo lắng về việc chăm sóc và lưu trữ của chúng.
              </Typography>
            </FooterLink>
            <br />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FooterLink href="#">
                <div>
                  <FacebookIcon />
                </div>
              </FooterLink>
              <FooterLink href="#">
                <div>
                  <InstagramIcon />
                </div>
              </FooterLink>
              <FooterLink href="#">
                <div>
                  <TwitterIcon />
                </div>
              </FooterLink>
            </div>
          </Grid>
          <Grid item xs={4}>
            <HeadingFooter>Thông tin liên hệ</HeadingFooter>
            <FooterLink href="#" style={{ display: "flex" }}>
              <LocationOnIcon />
              <Typography style={{ paddingLeft: "10px", color: 'white' }}>
                388/22 Khu Công Nghệ Cao, Quận 9, Thành phố Thủ Đức
              </Typography>
            </FooterLink>
            <FooterLink href="#" style={{ display: "flex" }}>
              <PhoneIcon />
              <Typography style={{ paddingLeft: "10px", color: 'white' }}>
                (+84) 123-456-789
              </Typography>
            </FooterLink>
            <FooterLink href="#" style={{ display: "flex" }}>
              <EmailIcon />
              <Typography style={{ paddingLeft: "10px", color: 'white' }}>
                Birdboardingteam6@gmail.com
              </Typography>
            </FooterLink>
            <FooterLink href="#" style={{ display: "flex" }}>
              <AccessTimeFilledIcon />
              <div>
                
                <Typography style={{ paddingLeft: "10px", color: 'white' }}>
                  24/7
                </Typography>
              </div>
            </FooterLink>
          </Grid>
          <Grid item xs={3}>
            <HeadingFooter>Chat ngay</HeadingFooter>
            <FooterLink href="#">
              <TextField
                style={{ background: "white" }}
                id="outlined-basic"
                placeholder="Email"
                // label="Outlined"
                variant="outlined"
              />
            </FooterLink>
          </Grid>
        </Grid>
      </ContainerFooter>
    </BoxFooter>
  );
}
