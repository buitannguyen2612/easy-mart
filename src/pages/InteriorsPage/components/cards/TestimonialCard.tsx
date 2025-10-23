import type { EmailInput } from "@/models/home/interface";
import { emailValidationSchema } from "@/pages/homePage/validation/validation-email-landing-page";
import { DEFAULT_FORM_EMAIL } from "@/shared/default-form/emailForm";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Controller, useForm } from "react-hook-form";

type Props = {};

const TestimonialCard = (props: Props) => {
  const {
    control,
    reset,
    watch,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInput>({
    mode: "onChange",
    resolver: yupResolver(emailValidationSchema),
    defaultValues: DEFAULT_FORM_EMAIL,
  });

  return (
    <Stack direction={"column"} alignItems={"center"} spacing={6}>
      {/* Title */}
      <Stack direction={"column"} alignItems={"center"}>
        <Typography variant="h3" fontWeight={600}>
          Trending Items
        </Typography>
        <Typography variant="body1" color="text.secondary">
          There are many variations passages
        </Typography>
      </Stack>

      {/* Slider */}
      <Box
        height={256}
        width={"100%"}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          gap: 2,
        }}
      >
        {/* Fake mapping, NEED USING PREVIEW PRODUCT MAPPING */}
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} sx={{ height: "100%", backgroundColor: "#e6e7eb" }}>
            <CardContent sx={{ p: 6, height: "100%", boxSizing: "border-box" }}>
              {/* Avatar and title name */}
              <Stack
                direction={"row"}
                spacing={2}
                width={"100%"}
                height={50}
                alignItems={"center"}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45, bgcolor: deepPurple[500] }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: "0.1rem",
                  }}
                >
                  <Typography variant="h5">Jonathon Doe</Typography>
                  <Typography variant="subtitle2">
                    Executive Officer, Amazon
                  </Typography>
                </Box>
              </Stack>

              {/* Descriptions */}
              <Typography variant="subtitle2" lineHeight={1.2} pt={2}>
                Long string Long string Long string Long string Long string Long
                string Long string Long string Long string Long string Long
                string Long string Long string .
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Background email input */}
      <Card
        sx={{
          width: "100%",
          height: 452,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2406')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "16 / 9",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Box
          height={"100%"}
          width={"40%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* Title and descriptions */}
          <Box sx={{ width: "60%" }}>
            <Typography variant="h2">GET $20 OFF YOUR FIRST ORDER</Typography>
            <Typography variant="subtitle1">On your next purchase</Typography>
          </Box>

          {/* Email input */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: "0.4rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.3)",
              width: "60%",
              maxWidth: 700,
              height: 40,
              mt: 5,
            }}
          >
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <TextField
                  fullWidth
                  value={value}
                  placeholder="Enter Your Mail Here"
                  variant="outlined"
                  onChange={onChange}
                  InputProps={{
                    sx: {
                      bgcolor: "#fff",
                      borderRadius: 0,
                      height: 40,
                      "& input": {
                        fontSize: "1rem",
                        color: "#555",
                        px: 2,
                      },
                    },
                  }}
                  sx={{
                    flex: 1,
                    "& fieldset": { border: "none" },
                  }}
                />
              )}
            />

            <Button
              variant="contained"
              sx={{
                bgcolor: "#000",
                color: "#fff",
                height: 40,
                borderRadius: 0,
                fontWeight: "bold",
                px: 4,
                fontSize: "0.9rem",
                "&:hover": {
                  bgcolor: "#111",
                },
              }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Box>
      </Card>
    </Stack>
  );
};

export default TestimonialCard;
