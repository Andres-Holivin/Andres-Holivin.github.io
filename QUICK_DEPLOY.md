# 🚀 Quick Deploy to GitHub Pages

## Run These Commands Now:

```bash
# 1. Add all changes
git add .

# 2. Commit changes
git commit -m "Setup GitHub Pages deployment with static export"

# 3. Push to GitHub
git push origin main
```

## Then in GitHub:

1. Go to: https://github.com/Andres-Holivin/Andres-Holivin.github.io/settings/pages
2. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
3. Click **Save**

## Watch Deployment:

- Go to: https://github.com/Andres-Holivin/Andres-Holivin.github.io/actions
- Wait 2-3 minutes for workflow to complete
- Your site will be live at: **https://andres-holivin.github.io**

## ✅ That's it!

Every time you push to main branch, GitHub will automatically rebuild and deploy your site.

---

## Update Content Later:

```bash
# 1. Run dev server
npm run dev

# 2. Go to http://localhost:3000/settings
# 3. Edit content → Export JSON
# 4. Replace public/portfolio-data.json
# 5. Commit and push

git add public/portfolio-data.json
git commit -m "Update portfolio content"
git push origin main
```

Deployment will happen automatically!
