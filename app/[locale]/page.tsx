'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ArrowRight, CheckCircle2, XCircle, Loader2, Sparkles, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  phone: string
  requestDetails: string
}

interface FormStatus {
  type: 'idle' | 'success' | 'error'
  message: string
}

export default function Home() {
  const { t, isRTL } = useLanguage()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    requestDetails: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })

  const openForm = () => {
    setIsFormOpen(true)
  }

  const validateEmail = (email: string): boolean => {
    if (!email) return true
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ type: 'idle', message: '' })

    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: t.form.errors.nameRequired })
      return
    }

    if (!formData.phone.trim()) {
      setStatus({ type: 'error', message: t.form.errors.phoneRequired })
      return
    }

    if (!formData.requestDetails.trim()) {
      setStatus({ type: 'error', message: t.form.errors.detailsRequired })
      return
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: t.form.errors.emailInvalid })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({ type: 'success', message: t.form.success })
        setFormData({
          name: '',
          email: '',
          phone: '',
          requestDetails: '',
        })
        // Close modal after 2 seconds on success
        setTimeout(() => {
          setIsFormOpen(false)
          setStatus({ type: 'idle', message: '' })
        }, 2000)
      } else {
        setStatus({ type: 'error', message: data.error || t.form.errors.somethingWentWrong })
      }
    } catch (error) {
      setStatus({ type: 'error', message: t.form.errors.tryAgain })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className={cn("min-h-screen bg-background", isRTL && "rtl")}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Image
              src="/tamr-logo-dark.svg"
              alt="Tamr.me"
              width={61}
              height={36}
              className="h-8 w-auto dark:brightness-0 dark:invert"
            />
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button onClick={openForm} size="sm" className="hidden sm:flex">
              {t.nav.submitRequest}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative mx-auto max-w-7xl px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground">{t.services.title.replace('🌟 ', '')}</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {t.hero.headline}
            </h1>
            <p className="mb-10 text-lg text-muted-foreground sm:text-xl md:text-2xl">
              {t.hero.subheading}
            </p>
            <div className={cn("flex flex-col gap-4 sm:flex-row sm:justify-center", isRTL && "sm:flex-row-reverse")}>
              <Button onClick={openForm} size="lg" className="group">
                {t.hero.getStarted}
                <ArrowRight className={cn("ml-2 h-4 w-4 transition-transform group-hover:translate-x-1", isRTL && "ml-0 mr-2 group-hover:-translate-x-1")} />
              </Button>
              <Button onClick={openForm} variant="outline" size="lg">
                {t.hero.viewServices}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.services.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {t.servicesList.map((service, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-border/50 transition-all hover:border-primary/50 hover:shadow-lg"
                onClick={openForm}
              >
                <CardHeader>
                  <div className="mb-2 text-3xl">{service.emoji}</div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button onClick={openForm} size="lg" variant="outline" className="group">
              {t.services.readyToStart}
              <ArrowRight className={cn("ml-2 h-4 w-4 transition-transform group-hover:translate-x-1", isRTL && "ml-0 mr-2 group-hover:-translate-x-1")} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why People Love Tamr Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.whyLove.title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.whyLove.benefits.map((benefit, index) => (
                <Card key={index} className="border-border/50 bg-card/50">
                  <CardContent className="flex items-start gap-3 pt-6">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unusual Request Section */}
      <section className="border-t border-border">
        <div className="container mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 via-background to-background">
              <CardHeader>
                <CardTitle className="mb-4 text-2xl sm:text-3xl md:text-4xl">
                  {t.unusualRequest.title}
                </CardTitle>
                <CardDescription className="mb-6 text-lg font-semibold text-foreground sm:text-xl">
                  {t.unusualRequest.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {t.unusualRequest.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">
              {t.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Discord CTA Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Join Our Community</CardTitle>
                <CardDescription className="text-base">
                  Connect with other users, share experiences, and get the latest updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a
                    href="https://discord.gg/JGRgFbeN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <MessageCircle className={cn("mr-2 h-4 w-4", isRTL && "mr-0 ml-2")} />
                    Join Discord Community
                    <ArrowRight className={cn("ml-2 h-4 w-4 transition-transform group-hover:translate-x-1", isRTL && "ml-0 mr-2 group-hover:-translate-x-1")} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Image
              src="/tamr-logo-dark.svg"
              alt="Tamr.me"
              width={61}
              height={36}
              className="h-8 w-auto dark:brightness-0 dark:invert opacity-60"
            />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Tamr.me. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Form Modal */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl">{t.form.title}</DialogTitle>
            <DialogDescription className="text-base">
              {t.form.subtitle}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="modal-name">
                {t.form.name} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="modal-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t.form.placeholders.name}
                dir={isRTL ? 'rtl' : 'ltr'}
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-email">{t.form.email}</Label>
              <Input
                id="modal-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.form.placeholders.email}
                dir="ltr"
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-phone">
                {t.form.phone} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="modal-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.form.placeholders.phone}
                dir={isRTL ? 'rtl' : 'ltr'}
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-requestDetails">
                {t.form.requestDetails} <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="modal-requestDetails"
                name="requestDetails"
                required
                rows={6}
                value={formData.requestDetails}
                onChange={handleChange}
                placeholder={t.form.placeholders.requestDetails}
                dir={isRTL ? 'rtl' : 'ltr'}
                className="resize-none"
              />
            </div>

            {status.type !== 'idle' && (
              <div
                className={cn(
                  "flex items-center gap-3 rounded-lg border p-4",
                  status.type === 'success'
                    ? "border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-100"
                    : "border-destructive/50 bg-destructive/10 text-destructive"
                )}
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{status.message}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.form.submitting}
                </>
              ) : (
                <>
                  {t.form.submit}
                  <ArrowRight className={cn("ml-2 h-4 w-4 transition-transform group-hover:translate-x-1", isRTL && "ml-0 mr-2 group-hover:-translate-x-1")} />
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
