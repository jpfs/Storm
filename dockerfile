WORKDIR /app

# Don't run as root
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# Copy built app and required files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]