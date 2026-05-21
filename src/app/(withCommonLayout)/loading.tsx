import {
  Box,
  Card,
  CardContent,
  Container,
  Grid2,
  Skeleton,
} from "@mui/material";

const ActivitiesLoading = () => {
  // লোডিং অবস্থায় আমরা ৬টি ডামি কার্ড দেখাবো
  const skeletonCards = Array.from(new Array(6));

  return (
    <Box>
      {/* Banner Skeleton */}
      <Skeleton
        variant="rectangular"
        sx={{ height: { xs: "250px", md: "400px" } }}
        animation="wave"
      />

      {/* Blog Cards Skeleton Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Grid2 container spacing={4}>
          {skeletonCards.map((_, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ borderRadius: "20px", height: "100%" }}>
                {/* Image Skeleton */}
                <Skeleton variant="rectangular" height={220} animation="wave" />

                <CardContent>
                  {/* Tag/Sub-title Skeleton */}
                  <Skeleton
                    variant="text"
                    width="40%"
                    height={20}
                    sx={{ mb: 1 }}
                    animation="wave"
                  />

                  {/* Title Skeleton (2 lines) */}
                  <Skeleton
                    variant="text"
                    width="90%"
                    height={30}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    width="70%"
                    height={30}
                    sx={{ mb: 2 }}
                    animation="wave"
                  />

                  {/* Description Skeleton (3 lines) */}
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={20}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={20}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    width="80%"
                    height={20}
                    sx={{ mb: 2 }}
                    animation="wave"
                  />

                  {/* Button Skeleton */}
                  <Skeleton
                    variant="rectangular"
                    height={40}
                    sx={{ borderRadius: "10px" }}
                    animation="wave"
                  />
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default ActivitiesLoading;
