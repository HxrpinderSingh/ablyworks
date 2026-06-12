import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useLocale } from "@/contexts/LocaleContext";
import { TESTIDS } from "@/constants/testIds";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const initial = { full_name: "", work_email: "", company: "", team_size: "", message: "" };

export default function DemoForm({ open, onOpenChange }) {
  const { t, locale, raw } = useLocale();
  const [values, setValues] = useState(initial);
  const [submitting, setSubmitting] = useState(false);

  const teamOptions = raw.form.team_size_options || ["1-10", "11-50", "51-200", "201-1000", "1000+"];

  const handleChange = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.full_name || !values.work_email || !values.company) {
      toast.error(t("form.error"));
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/leads`, { ...values, locale });
      toast.success(t("form.success"));
      setValues(initial);
      onOpenChange(false);
    } catch (err) {
      toast.error(t("form.error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-testid={TESTIDS.demoForm} className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "Outfit" }} className="text-2xl">
            {t("form.title")}
          </DialogTitle>
          <DialogDescription className="text-slate-600">{t("form.sub")}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="full_name">{t("form.name")}</Label>
              <Input
                id="full_name"
                data-testid={TESTIDS.demoName}
                value={values.full_name}
                onChange={handleChange("full_name")}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="work_email">{t("form.email")}</Label>
              <Input
                id="work_email"
                type="email"
                data-testid={TESTIDS.demoEmail}
                value={values.work_email}
                onChange={handleChange("work_email")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="company">{t("form.company")}</Label>
              <Input
                id="company"
                data-testid={TESTIDS.demoCompany}
                value={values.company}
                onChange={handleChange("company")}
              />
            </div>
            <div className="space-y-1.5">
              <Label>{t("form.team_size")}</Label>
              <Select value={values.team_size} onValueChange={(v) => setValues((s) => ({ ...s, team_size: v }))}>
                <SelectTrigger data-testid={TESTIDS.demoTeamSize}>
                  <SelectValue placeholder="—" />
                </SelectTrigger>
                <SelectContent>
                  {teamOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">{t("form.message")}</Label>
            <Textarea
              id="message"
              data-testid={TESTIDS.demoMessage}
              rows={3}
              value={values.message}
              onChange={handleChange("message")}
            />
          </div>

          <Button
            type="submit"
            data-testid={TESTIDS.demoSubmit}
            disabled={submitting}
            className="w-full rounded-lg h-11 font-semibold text-white hover:-translate-y-0.5 transition-all"
            style={{ background: "var(--aw-primary)" }}
          >
            {submitting ? t("form.submitting") : t("form.submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
