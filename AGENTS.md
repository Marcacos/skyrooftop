<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The SKY7 single-page site lives at `/` and uses anchored sections rather than extra routes, keeping the venue journey in one page.
- Authentic venue photos are stored as Lovable asset pointers under `src/assets`, avoiding external image hotlinks.
- Reservation requests open WhatsApp with form details and explicitly require staff confirmation, avoiding a false booking guarantee.
