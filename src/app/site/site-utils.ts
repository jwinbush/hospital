import {
    CONDITION_CATEGORIES,
    ConditionCategory,
    PROVIDERS,
    Provider,
    SERVICES,
    Service,
} from './site-content';

/** "Maya Thompson" → "MT" (used in avatar circles) */
export function initials(name: string): string {
    return name
        .replace(/^Dr\.\s*/, '')
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

export function findService(slug: string | null): Service | undefined {
    return SERVICES.find((service) => service.slug === slug);
}

export function findConditionCategory(slug: string | null): ConditionCategory | undefined {
    return CONDITION_CATEGORIES.find((category) => category.slug === slug);
}

export function findProvider(slug: string | null): Provider | undefined {
    return PROVIDERS.find((provider) => provider.slug === slug);
}

/** "Dr. Maya Thompson, MD" — or no "Dr." for nurse practitioners */
export function providerDisplayName(provider: Provider): string {
    const prefix = provider.credentials === 'NP' ? '' : 'Dr. ';
    return `${prefix}${provider.name}, ${provider.credentials}`;
}
