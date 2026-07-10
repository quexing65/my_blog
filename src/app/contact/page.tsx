'use client'

import { motion } from 'motion/react'
import { INIT_DELAY } from '@/consts'
import EmailSVG from '@/svgs/email.svg'
import GithubSVG from '@/svgs/github.svg'

export default function ContactPage() {
	return (
		<div className='flex flex-col items-center justify-center px-6 pt-32 pb-12'>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: INIT_DELAY }}
				className='card relative w-full max-w-[480px] space-y-8 p-8'>
				<div className='text-center'>
					<h1 className='text-2xl font-semibold'>联系方式</h1>
					<p className='text-secondary mt-2 text-sm'>欢迎通过以下方式联系我</p>
				</div>

				<div className='space-y-4'>
					<a
						href='mailto:quexing65@gmail.com'
						className='card flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/80'>
						<EmailSVG className='size-8 shrink-0' />
						<div>
							<div className='text-sm font-medium'>邮箱</div>
							<div className='text-secondary text-sm'>quexing65@gmail.com</div>
						</div>
					</a>

					<a
						href='https://github.com/quexing65'
						target='_blank'
						className='card flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/80'>
						<GithubSVG className='size-8 shrink-0' />
						<div>
							<div className='text-sm font-medium'>GitHub</div>
							<div className='text-secondary text-sm'>quexing65</div>
						</div>
					</a>
				</div>
			</motion.div>
		</div>
	)
}
