import { useLanguage } from "./useLanguage";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { AntSwitch } from "./language-switcher-style";



export const LanguageSwitcher = () => {
  const { changeLanguage } = useLanguage();
  const { i18n } = useTranslation();
;
  return (
    <FormGroup className="w-full">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="flex justify-end">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              variant="body2"
              className={`cursor-pointer ${
                i18n.language === "en"
                  ? "font-bold text-white"
                  : "text-gray-400"
              }`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </Typography>
            <AntSwitch
              checked={i18n.language === "es"}
              onChange={(e) => changeLanguage(e.target.checked ? "es" : "en")}
              inputProps={{ "aria-label": "language-switch" }}
            />
            <Typography
              variant="body2"
              className={`cursor-pointer ${
                i18n.language === "es"
                  ? "font-bold text-white"
                  : "text-gray-400"
              }`}
              onClick={() => changeLanguage("es")}
            >
              ES
            </Typography>
          </Stack>
        </div>
      </div>
    </FormGroup>
  );
};

