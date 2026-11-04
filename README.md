# Baderin Energies Consulting – first website preview

An English-language concept site for the current registered business name. It presents the project lifecycle described by the customer without invented case studies, client names or credentials. “RINEnergies” is a future naming plan, not the current public identity.

## Local development

Requires Node.js 22 and npm. Run `npm ci`, then `npm run dev`. Validate with `npm run lint` and `npm run build`. The site lives in `src/app/`. The GitHub Actions workflow in `.github/workflows/pages.yml` exports and deploys the static site after a deliberate push to `main`.

Repository: https://github.com/ltj54/baderin-energies-consulting

Preview: https://ltj54.github.io/baderin-energies-consulting/

The initial controlled commit and push publish the first preview. Subsequent changes remain local unless Lars expressly asks for another commit and push. Local development and build commands never publish.

The contact form is deliberately disabled and has no action, recipient or FormSubmit.co integration. Public phone number, email address, approved content and permanent domain still need customer confirmation. The local `KRAVSPESIFIKASJON.md` and `AVTALEUTKAST_NETTSIDE_OG_DRIFT.md` are internal and ignored by Git.
