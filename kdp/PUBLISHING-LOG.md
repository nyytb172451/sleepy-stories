# KDP Publishing Log - Snoozy Stories

## Publishing Status Overview

| # | Story | Slug | Status | KDP ID | Price |
|---|-------|------|--------|--------|-------|
| 1 | Luna Finds Her Blanket | luna-finds-her-blanket | ✅ In Review | A235L06XGDCV24 | $2.99 |
| 2 | Bop the Bunny Says Goodnight | bop-the-bunny-says-goodnight | ✅ In Review | AMZ9WRUGHP8HW | $2.99 |
| 3 | Five Little Stars | five-little-stars | ⚠️ Draft (needs files) | A2GZ7SZ2CGLELT | - |
| 4 | Tiny Turtle Takes a Bath | tiny-turtle-takes-a-bath | ⚠️ Draft (corrupted) | - | - |
| 5 | The Sleepy Sloth | the-sleepy-sloth | ⚠️ Draft | ANHR8RZ787RSF | - |
| 6 | Pip and the Night Train | pip-and-the-night-train | ✅ In Review | A37BV7ZG0BYMZ | $2.99 |
| 7+ | Remaining 20 books | - | ❌ Not started | - | - |

## Last Completed: Pip and the Night Train

**Status:** ✅ PUBLISHED - In Review (2026-02-11)
**KDP ID:** A37BV7ZG0BYMZ

### Completed Steps:
- [x] Details page filled (title, subtitle, author, description, categories, keywords)
- [x] Manuscript uploaded (manuscript.html)
- [x] Cover uploaded (cover-kdp.jpg - 1600x2560 portrait)
- [x] DRM enabled
- [x] AI content disclosed (DALL-E for images)
- [x] Pricing set ($2.99 USD + all marketplaces)
- [x] Published!

### Files Created:
- `kdp/pip-and-the-night-train/manuscript.html`
- `kdp/pip-and-the-night-train/cover-kdp.jpg` (portrait cover with title text)
- `kdp/pip-and-the-night-train/cover.png` (original)
- `kdp/pip-and-the-night-train/pip-02-home.png`
- `kdp/pip-and-the-night-train/pip-13-sleeping.png`

---

## Technical Notes

### What Works:
1. **JavaScript selectors** for filling forms (avoids ref-shifting issues)
   ```javascript
   document.getElementById('data-title').value = 'Title';
   ```

2. **CKEditor API** for description field:
   ```javascript
   CKEDITOR.instances.editor1.setData('<html content>');
   ```

3. **File uploads** via browser upload action with selector:
   - Manuscript: `#data-assets-interior-file-upload-AjaxInput`
   - Cover: `#data-assets-cover-file-upload-AjaxInput`

### Cover Requirements:
- Format: JPG or TIFF
- Orientation: Portrait (height > width)
- Recommended: 1600x2560 pixels (1.6:1 ratio)
- Our images are landscape 1792x1024, need conversion

### Cover Generation Script:
```bash
cd bedtime-stories-site
node kdp/create-cover.js
```
Or create new covers by editing `kdp/create-cover.js` with new title/image paths.

### Form Field IDs:
- `data-title` - Book title
- `data-subtitle` - Subtitle
- `data-primary-author-first-name` - Author first name
- `data-primary-author-last-name` - Author last name
- `data-edition-number` - Edition (optional)
- Keywords: `data-keyword-1` through `data-keyword-7`

### Standard Settings:
- Language: English
- Author: Snoozy Stories
- Subtitle: A Snoozy Stories Bedtime Book
- Publishing Rights: I own the copyright
- Adult content: No
- Age range: Toddlers (2-4) or Early Readers (5-7)
- DRM: Yes
- Royalty: 70%
- Price: $2.99 USD

### Categories Used:
**Toddlers (Ages 2-4):**
- Children's eBooks > Literature & Fiction > Bedtime & Dreaming
- (varies by story theme)

**Early Readers (Ages 5-7):**
- Children's eBooks > Cars, Trains & Things That Go > Trains > Fiction (for Pip)
- Children's eBooks > Literature & Fiction > Bedtime & Dreaming
- Children's eBooks > Literature & Fiction > Imagination & Play

---

## Story List (All 26)

### Toddlers (Ages 2-4) - 2 min reads:
1. Luna Finds Her Blanket ✅
2. Bop the Bunny Says Goodnight ✅
3. Five Little Stars ⚠️
4. Tiny Turtle Takes a Bath ⚠️
5. The Sleepy Sloth ⚠️
6. Where Is Bear?
7. Night Night, Farm
8. One More Hug
9. Rainbow Dreams
10. Whisper, Whisper
11. Moon and Me
12. Soft Things
13. The Yawn Song

### Early Readers (Ages 5-7) - 5 min reads:
14. Pip and the Night Train 🔄
15. The Girl Who Collected Clouds
16. The Sleepy Dragon
17. The Lighthouse Keeper's Daughter
18. The Night Gardener
19. The Wish Fish
20. The Blanket Fort Kingdom
21. The Star Collector
22. The Monster Under My Bed Is Scared
23. The Dream Library
24. The Night Bus
25. The Shadow Friend
26. The Sleep Train Engineer

---

## Next Steps
1. Finish publishing Pip and the Night Train (set price, click publish)
2. Fix corrupted drafts (Tiny Turtle - wrong author name)
3. Complete Five Little Stars draft (upload files)
4. Continue with remaining 20 books

Last Updated: 2026-02-11 08:15 AM EST
