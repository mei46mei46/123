import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Outlet, Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function MediaCard() {
  return (
    <>
      <Card sx={{ maxWidth: 1000, m: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" lang="zh-Hant">
            我寶貝的cover
          </Typography>
          <Typography variant="body2" color="text.secondary" lang="zh-Hant">
            都來給我聽都來給我聽都來給我聽都來給我聽都來給我聽都來給我聽都來給我聽都來給我聽都來給我聽都來給我聽都來給我聽都來給我聽
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="https://www.youtube.com/watch?v=-d8gUv_MNsE&list=RD-d8gUv_MNsE&start_radio=1&ab_channel=CRAVITY"
            lang="ko"
          >
            원진-MIRACLE
            <ArrowOutwardIcon />
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 1000, m: 2 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://pbs.twimg.com/media/EWx7CgWXkAIYvtV?format=jpg&name=large"
          title="green"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Divider variant="middle" />
      <Card sx={{ maxWidth: 1000, m: 2 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://pbs.twimg.com/media/Ftg6QhNaAAEnlkH?format=jpg&name=large"
          title="green"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" lang="zh-Hant">
            咸元進
          </Typography>
          <Typography variant="body2" color="text.secondary" lang="zh-Hant">
            可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛可愛是我寶寶
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
