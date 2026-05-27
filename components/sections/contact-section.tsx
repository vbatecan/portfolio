"use client"

import { PaperAirplaneIcon, CheckCircleIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("myzelnng")

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <Card className="p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
              <div className="flex justify-center mb-6">
                <div className="p-4">
                  <CheckCircleIcon className="h-12 w-12 text-primary" />
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Message Sent</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  Got it. I'll get back to you when I can.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="font-mono rounded-xl"
                >
                  Send Another
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            <ChatBubbleLeftRightIcon className="inline h-4 w-4 mr-2" />
            contact.init()
          </p>
          <h2 className="section-title mb-4">Get in Touch</h2>
          <div className="accent-line mb-6"></div>
        </div>

        <div>
          <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="font-mono text-xs text-secondary uppercase tracking-wide mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={state.submitting}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 font-mono"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1 font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs text-secondary uppercase tracking-wide mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    disabled={state.submitting}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 font-mono"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1 font-mono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-secondary uppercase tracking-wide mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                  disabled={state.submitting}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 font-mono resize-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1 font-mono"
                />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-mono shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {state.submitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <PaperAirplaneIcon className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>

            {/* Alternative contact */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                Or reach me directly:
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="mailto:vbatecan@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-mono hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  vbatecan@gmail.com
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}