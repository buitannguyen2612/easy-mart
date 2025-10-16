import type { EmailInput } from "@/models/home/interface";
import { emailValidationSchema } from "@/pages/homePage/validation/validation-email-landing-page";
import { DEFAULT_FORM_EMAIL } from "@/shared/default-form/emailForm";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const EmailFormCard = () => {
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
    <Card
      sx={{
        width: "100%",
        height: 425,
        backgroundImage:
          "url('https://template.getbazaar.io/assets/images/banners/banner-27.png')",
        backgroundSize: "cover",
        backdropFilter: "blur(10px)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `inherit`, // same as the card bg
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
          transform: "scale(1.1)", // prevent visible edges
          zIndex: 0,
        },
      }}
    >
      <CardContent
        sx={{
          zIndex: 1,
          backdropFilter: "blur(4px)",
          borderRadius: 2,
          height: "100%",
          border: "solid white 1px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.8,
          pt: 8,
        }}
      >
        <Typography variant="h6" color="white">
          Sign Up Newsletter & Promotions!
        </Typography>
        <Stack direction={"column"} spacing={0.2} alignItems={"center"}>
          <Typography variant="h2" color="white">
            Get 50% Discount
          </Typography>
          <Typography variant="h1" color="white">
            On your next purchase
          </Typography>
        </Stack>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            borderRadius: "0.4rem",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.3)",
            width: "90%",
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
      </CardContent>
    </Card>
  );
};

export default EmailFormCard;
