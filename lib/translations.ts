export type Language = 'en' | 'ar'

export interface Translations {
  nav: {
    submitRequest: string
  }
  hero: {
    headline: string
    subheading: string
    getStarted: string
    viewServices: string
  }
  services: {
    title: string
    subtitle: string
    readyToStart: string
  }
  form: {
    title: string
    subtitle: string
    name: string
    email: string
    phone: string
    requestDetails: string
    submit: string
    submitting: string
    placeholders: {
      name: string
      email: string
      phone: string
      requestDetails: string
    }
    errors: {
      nameRequired: string
      phoneRequired: string
      detailsRequired: string
      emailInvalid: string
      somethingWentWrong: string
      tryAgain: string
    }
    success: string
  }
  footer: {
    rights: string
  }
  whyLove: {
    title: string
    benefits: string[]
  }
  unusualRequest: {
    title: string
    subtitle: string
    description: string
  }
  tagline: string
  servicesList: Array<{
    emoji: string
    title: string
    description: string
  }>
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      submitRequest: 'Submit Request',
    },
    hero: {
      headline: 'Real humans to handle your tasks',
      subheading: 'Tamr.me connects your request to a human account manager who coordinates workers to get it done.',
      getStarted: 'Get Started →',
      viewServices: 'View Services ↓',
    },
    services: {
      title: '🌟 Everyday Services You Can Request',
      subtitle: 'From research to shopping, events to travel — we handle it all with real people.',
      readyToStart: 'Ready to Get Started? Submit Your Request →',
    },
    form: {
      title: 'Submit Your Request',
      subtitle: 'Tell us what you need, and we\'ll connect you with the right people to get it done.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      requestDetails: 'Request Details',
      submit: 'Submit Request →',
      submitting: 'Submitting...',
      placeholders: {
        name: 'Your full name',
        email: 'your.email@example.com',
        phone: 'Your phone number',
        requestDetails: 'Describe your request in detail. What do you need help with?',
      },
      errors: {
        nameRequired: 'Name is required.',
        phoneRequired: 'Phone is required.',
        detailsRequired: 'Request details are required.',
        emailInvalid: 'Please enter a valid email address.',
        somethingWentWrong: 'Something went wrong. Please try again.',
        tryAgain: 'Failed to submit request. Please try again.',
      },
      success: 'We received your request. We\'ll contact you soon.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    whyLove: {
      title: '❤️ Why people love Tamr',
      benefits: [
        'Real humans, not automated bots',
        'Quick response time',
        'Flexible for anything — errands, tasks, projects',
        'No app to figure out',
        'Transparent communication',
        'Smooth coordination between client ↔ manager ↔ worker',
        'No stress — just results',
      ],
    },
    unusualRequest: {
      title: '💬 "What if my request is unusual?"',
      subtitle: 'Perfect.',
      description: 'The more unique the request, the more Tamr shines.\n\nJust describe it in your own words.\nA human will handle the rest.',
    },
    tagline: 'Tamr.me — Tell us what you need. We\'ll get it done.',
    servicesList: [
      { emoji: '🧠', title: 'Human Research Assistant', description: 'Need quick answers or comparisons? We\'ll research anything for you.' },
      { emoji: '🛍️', title: 'Personal Shopper', description: 'Want help buying something online or in-store? We shop with you, even on video.' },
      { emoji: '🚚', title: 'Pickup & Delivery', description: 'Need something collected or dropped off? We handle it end-to-end.' },
      { emoji: '💻', title: 'Website / Online Store', description: 'We build your website or ecommerce shop from scratch.' },
      { emoji: '📱', title: 'Social Media Help', description: 'We schedule posts, reply to messages, and keep your pages active.' },
      { emoji: '🎤', title: 'Promoters for Booths & Events', description: 'Need people to run or promote your booth? We recruit and manage them.' },
      { emoji: '👥', title: 'Hire Staff for Anything', description: 'Need help? We\'ll assign the right people for the job.' },
      { emoji: '📦', title: 'Warehousing & Fulfillment', description: 'Store, pack, and ship your orders — handled for you.' },
      { emoji: '📚', title: 'Homework & Study Help', description: 'Get explanations, tutoring, and support for any subject.' },
      { emoji: '✍️', title: 'Copywriting & Content', description: 'Captions, descriptions, edits — we write what you need.' },
      { emoji: '👩‍🏫', title: 'Teaching & Lessons', description: 'Learn anything with a personal tutor.' },
      { emoji: '🧹', title: 'Find & Book Local Services', description: 'Cleaning, repairs, maintenance — we book and manage it all.' },
      { emoji: '🎁', title: 'Gift Shopping & Surprises', description: 'We find, buy, and deliver the perfect gift.' },
      { emoji: '🎥', title: 'Mystery Shopping', description: 'We visit stores, record videos, and give honest feedback.' },
      { emoji: '🐾', title: 'Pet Errands & Vet Runs', description: 'Supplies, grooming, or vet appointments — done for you.' },
      { emoji: '🧳', title: 'Travel Planning', description: 'We build full travel plans and handle bookings.' },
      { emoji: '🎉', title: 'Event Help', description: 'Birthdays, dinners, small events — organized and managed for you.' },
      { emoji: '🏠', title: 'Home Management', description: 'Cleaning schedules, repairs, inspections — we oversee everything.' },
      { emoji: '🛒', title: 'Market Price Checks', description: 'We compare prices across stores and find the best deals.' },
      { emoji: '💬', title: 'Ask for Anything', description: 'Not sure? Just tell us what you need — we\'ll handle it.' },
    ],
  },
  ar: {
    nav: {
      submitRequest: 'إرسال طلب',
    },
    hero: {
      headline: 'بشر حقيقيون لتنفيذ مهامك',
      subheading: 'Tamr.me يربط طلبك بمدير حساب بشري يقوم بتنسيق العمال لإنجاز المهمة.',
      getStarted: 'ابدأ الآن ←',
      viewServices: 'عرض الخدمات ↓',
    },
    services: {
      title: '🌟 الخدمات اليومية التي يمكنك طلبها',
      subtitle: 'من البحث إلى التسوق، ومن الفعاليات إلى السفر — نحن نتعامل مع كل شيء بأشخاص حقيقيين.',
      readyToStart: 'هل أنت مستعد للبدء؟ أرسل طلبك ←',
    },
    form: {
      title: 'إرسال طلبك',
      subtitle: 'أخبرنا بما تحتاجه، وسنربطك بالأشخاص المناسبين لإنجازه.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      requestDetails: 'تفاصيل الطلب',
      submit: 'إرسال الطلب ←',
      submitting: 'جاري الإرسال...',
      placeholders: {
        name: 'اسمك الكامل',
        email: 'بريدك.الإلكتروني@example.com',
        phone: 'رقم هاتفك',
        requestDetails: 'اوصف طلبك بالتفصيل. ما الذي تحتاج مساعدة فيه؟',
      },
      errors: {
        nameRequired: 'الاسم مطلوب.',
        phoneRequired: 'الهاتف مطلوب.',
        detailsRequired: 'تفاصيل الطلب مطلوبة.',
        emailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
        somethingWentWrong: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
        tryAgain: 'فشل إرسال الطلب. يرجى المحاولة مرة أخرى.',
      },
      success: 'لقد استلمنا طلبك. سنتواصل معك قريباً.',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
    },
    whyLove: {
      title: '❤️ لماذا يحب الناس Tamr',
      benefits: [
        'بشر حقيقيون، وليس روبوتات آلية',
        'وقت استجابة سريع',
        'مرن لأي شيء — مهام، أعمال، مشاريع',
        'لا حاجة لتطبيق معقد',
        'تواصل شفاف',
        'تنسيق سلس بين العميل ↔ المدير ↔ العامل',
        'لا إجهاد — فقط نتائج',
      ],
    },
    unusualRequest: {
      title: '💬 "ماذا لو كان طلبي غير عادي؟"',
      subtitle: 'مثالي.',
      description: 'كلما كان الطلب أكثر تفرداً، كلما برز Tamr.\n\nفقط صفه بكلماتك الخاصة.\nالبشر سيتعاملون مع الباقي.',
    },
    tagline: 'Tamr.me — أخبرنا بما تحتاجه. سننجزه.',
    servicesList: [
      { emoji: '🧠', title: 'مساعد بحث بشري', description: 'تحتاج إجابات سريعة أو مقارنات؟ سنبحث عن أي شيء لك.' },
      { emoji: '🛍️', title: 'متسوق شخصي', description: 'تريد مساعدة في شراء شيء ما عبر الإنترنت أو في المتجر؟ نتسوق معك، حتى عبر الفيديو.' },
      { emoji: '🚚', title: 'الاستلام والتسليم', description: 'تحتاج شيئاً يتم جمعه أو تسليمه؟ نحن نتعامل معه من البداية للنهاية.' },
      { emoji: '💻', title: 'موقع ويب / متجر إلكتروني', description: 'نبني موقعك الإلكتروني أو متجرك الإلكتروني من الصفر.' },
      { emoji: '📱', title: 'مساعدة وسائل التواصل الاجتماعي', description: 'نحدد مواعيد المنشورات، ونجيب على الرسائل، ونبقي صفحاتك نشطة.' },
      { emoji: '🎤', title: 'مروجون للأكشاك والفعاليات', description: 'تحتاج أشخاصاً لإدارة أو الترويج لكشكك؟ نحن نستقطبهم ونديرهم.' },
      { emoji: '👥', title: 'توظيف موظفين لأي شيء', description: 'تحتاج مساعدة؟ سنعين الأشخاص المناسبين للوظيفة.' },
      { emoji: '📦', title: 'التخزين والتنفيذ', description: 'تخزين، تعبئة، وشحن طلباتك — يتم التعامل معها لك.' },
      { emoji: '📚', title: 'مساعدة الواجبات والدراسة', description: 'احصل على شروحات، دروس خصوصية، ودعم لأي مادة.' },
      { emoji: '✍️', title: 'كتابة المحتوى', description: 'التعليقات، الأوصاف، التعديلات — نكتب ما تحتاجه.' },
      { emoji: '👩‍🏫', title: 'التدريس والدروس', description: 'تعلم أي شيء مع مدرس خاص.' },
      { emoji: '🧹', title: 'العثور على وحجز الخدمات المحلية', description: 'التنظيف، الإصلاحات، الصيانة — نحجزها ونديرها جميعاً.' },
      { emoji: '🎁', title: 'تسوق الهدايا والمفاجآت', description: 'نجد ونشتري ونوصل الهدية المثالية.' },
      { emoji: '🎥', title: 'التسوق السري', description: 'نزور المتاجر، نسجل مقاطع فيديو، ونعطي ملاحظات صادقة.' },
      { emoji: '🐾', title: 'مهام الحيوانات الأليفة وزيارات الطبيب البيطري', description: 'المستلزمات، العناية، أو مواعيد الطبيب البيطري — تم إنجازها لك.' },
      { emoji: '🧳', title: 'تخطيط السفر', description: 'نبني خطط سفر كاملة ونتعامل مع الحجوزات.' },
      { emoji: '🎉', title: 'مساعدة الفعاليات', description: 'أعياد الميلاد، العشاء، الفعاليات الصغيرة — منظمة ومديرة لك.' },
      { emoji: '🏠', title: 'إدارة المنزل', description: 'جداول التنظيف، الإصلاحات، الفحوصات — نحن نشرف على كل شيء.' },
      { emoji: '🛒', title: 'فحص أسعار السوق', description: 'نقارن الأسعار عبر المتاجر ونجد أفضل الصفقات.' },
      { emoji: '💬', title: 'اسأل عن أي شيء', description: 'لست متأكداً؟ فقط أخبرنا بما تحتاجه — سنتعامل معه.' },
    ],
  },
}

