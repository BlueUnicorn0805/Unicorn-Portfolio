import profileImage from '../../images/profile.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-xl" style={{ fontStyle: "italic" }}>
					"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
				</p>
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
				>
					Seasoned mobile engineer with over 8 years of experience in developing and architecting iOS and Android applications. 
					Skilled in both native and cross-platform development, with a strong focus on performance optimization and user experience.<br/>
					Proficient in leading teams and collaborating with designers and product managers to deliver high-quality mobile solutions.<br/>
					Passionate about staying up-to-date with the latest mobile technologies and best practices.
				</p>
			</div>
		</div>
	);
};

export default AboutMeBio;
