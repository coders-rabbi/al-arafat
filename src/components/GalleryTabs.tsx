"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Dialog,
  MenuItem,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { GalleryItem, galleryItems } from "@/data/gallery";

const BN_MONTHS = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

const monthLabel = (key: string) => {
  const [y, m] = key.split("-");
  return `${BN_MONTHS[Number(m) - 1]} ${Number(y).toLocaleString("bn-BD", { useGrouping: false })}`;
};

export default function GalleryTabs() {
  const [tab, setTab] = useState<"photo" | "video">("photo");
  const [month, setMonth] = useState("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const tabItems = useMemo(
    () =>
      galleryItems
        .filter((i) => i.type === tab)
        .sort((a, b) => b.date.localeCompare(a.date)),
    [tab],
  );

  const months = useMemo(
    () => Array.from(new Set(tabItems.map((i) => i.date.slice(0, 7)))),
    [tabItems],
  );

  const visible =
    month === "all"
      ? tabItems
      : tabItems.filter((i) => i.date.startsWith(month));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* ট্যাব + ফিল্টার */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", sm: "center" },
          gap: 2,
          mb: 4,
        }}
      >
        <Tabs
          value={tab}
          onChange={(_, v) => {
            setTab(v);
            setMonth("all");
          }}
          sx={{
            bgcolor: "grey.100",
            borderRadius: 999,
            p: 0.5,
            minHeight: 0,
            width: "fit-content",
            "& .MuiTabs-indicator": { display: "none" },
            "& .MuiTab-root": {
              minHeight: 0,
              borderRadius: 999,
              px: 3,
              py: 1,
              fontWeight: 600,
              textTransform: "none",
            },
            "& .Mui-selected": {
              bgcolor: "primary.main",
              color: "#fff !important",
            },
          }}
        >
          <Tab value="photo" label="ছবি" disableRipple />
          <Tab value="video" label="ভিডিও" disableRipple />
        </Tabs>

        <TextField
          select
          size="small"
          label="মাস অনুযায়ী"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="all">সব সময়</MenuItem>
          {months.map((m) => (
            <MenuItem key={m} value={m}>
              {monthLabel(m)}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* গ্রিড */}
      {visible.length === 0 ? (
        <Typography align="center" color="text.secondary" py={8}>
          এই সময়ে কোনো {tab === "photo" ? "ছবি" : "ভিডিও"} পাওয়া যায়নি।
        </Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {visible.map((item) => (
            <Box
              key={item.id}
              onClick={() => setSelected(item)}
              sx={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: 2,
                "& img": { transition: "transform .4s" },
                "&:hover img": { transform: "scale(1.08)" },
                "&:hover .caption": { opacity: 1 },
              }}
            >
              {item.type === "photo" ? (
                <Image
                  src={item.src!}
                  alt={item.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <>
                  <Box
                    component="img"
                    src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    alt={item.title}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        bgcolor: "rgba(0,0,0,0.65)",
                        color: "#fff",
                        fontSize: 26,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pl: 0.5,
                      }}
                    >
                      ▶
                    </Box>
                  </Box>
                </>
              )}

              <Box
                className="caption"
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  p: 2,
                  color: "#fff",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  opacity: { xs: 1, md: 0 },
                  transition: "opacity .3s",
                }}
              >
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography variant="caption">
                  {new Date(item.date).toLocaleDateString("bn-BD", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* Lightbox */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="lg"
        fullWidth
        slotProps={{ paper: { sx: { bgcolor: "#000", borderRadius: 2 } } }}
      >
        {selected && (
          <Box sx={{ position: "relative", aspectRatio: "16 / 9" }}>
            {selected.type === "photo" ? (
              <Image
                src={selected.src!}
                alt={selected.title}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selected.youtubeId}?autoplay=1`}
                title={selected.title}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: 0 }}
              />
            )}
            <Box
              onClick={() => setSelected(null)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 36,
                height: 36,
                borderRadius: "50%",
                bgcolor: "rgba(0,0,0,0.6)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              ✕
            </Box>
          </Box>
        )}
      </Dialog>
    </Container>
  );
}
