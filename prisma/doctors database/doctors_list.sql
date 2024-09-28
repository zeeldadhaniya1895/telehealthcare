-- Create the doctors table
CREATE TABLE doctors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    specialty TEXT NOT NULL,
    degree TEXT NOT NULL,
    rating DECIMAL(2, 1),
    consulting_fee INTEGER NOT NULL,
    description TEXT NOT NULL
);

-- Insert sample data into the doctors table
INSERT INTO doctors (name, specialty, degree, rating, consulting_fee, description) VALUES
('Dr. Ramesh Kumar', 'General Physician', 'MBBS', 4.5, 399, 'Consult a general physician for routine health check-ups and guidance on general health concerns.'),
('Dr. Anita Sharma', 'Mental Wellness', 'MD in Psychiatry', 4.7, 599, 'Specialist consultation for mental health and wellness, including symptoms like anxiety, depression, and stress.'),
('Dr. Vikram Singh', 'Coughing Specialist', 'MD in Pulmonology', 4.6, 450, 'Get help with persistent coughing, wheezing, and shortness of breath from a qualified specialist.'),
('Dr. Priya Gupta', 'Irregular Periods', 'MD in Gynaecology', 4.6, 499, 'Consult for irregular and painful periods, including symptoms such as heavy bleeding or missed cycles.'),
('Dr. Ajay Mehta', 'Kidney Specialist', 'MD in Nephrology', 4.7, 650, 'Expert consultations for kidney health, symptoms include back pain, blood in urine, or swelling in extremities.'),
('Dr. Sunita Verma', 'Pediatric Specialist', 'MD in Pediatrics', 4.8, 650, 'Expert consultations for children's health, covering issues like developmental delays, allergies, and infections.'),
('Dr. Neeraj Joshi', 'Sexology Specialist', 'MD in Sexual Medicine', 4.5, 700, 'Consultations for sexual health and education, including symptoms of erectile dysfunction and relationship issues.'),
('Dr. Kavita Bhatia', 'Stomach Specialist', 'MD in Gastroenterology', 4.6, 550, 'Get expert advice for stomach-related issues such as acid reflux, bloating, and chronic pain.'),
('Dr. Pankaj Desai', 'Gynaecology Specialist', 'MD in Gynaecology', 4.7, 550, 'Get expert advice for gynecological issues, including irregular menstruation, pelvic pain, and hormonal imbalances.'),
('Dr. Anjali Mehta', 'Dermatologic Specialist', 'MD in Dermatology', 4.4, 550, 'Get expert advice for acne-related issues and skin care, including symptoms of severe breakouts and scarring.'),
('Dr. Sanjay Choudhary', 'General Physician', 'MBBS', 4.6, 399, 'Consult a general physician for routine health check-ups and guidance on general health concerns.'),
('Dr. Suman Yadav', 'Mental Wellness', 'MD in Psychiatry', 4.5, 599, 'Specialist consultation for mental health and wellness, including symptoms like anxiety, depression, and stress.'),
('Dr. Ankit Rathi', 'Coughing Specialist', 'MD in Pulmonology', 4.4, 450, 'Get help with persistent coughing, wheezing, and shortness of breath from a qualified specialist.'),
('Dr. Megha Sharma', 'Irregular Periods', 'MD in Gynaecology', 4.5, 499, 'Consult for irregular and painful periods, including symptoms such as heavy bleeding or missed cycles.'),
('Dr. Nitin Agarwal', 'Kidney Specialist', 'MD in Nephrology', 4.7, 650, 'Expert consultations for kidney health, symptoms include back pain, blood in urine, or swelling in extremities.'),
('Dr. Ritu Singh', 'Pediatric Specialist', 'MD in Pediatrics', 4.6, 650, 'Expert consultations for children\'s health, covering issues like developmental delays, allergies, and infections.'),
('Dr. Kunal Mishra', 'Sexology Specialist', 'MD in Sexual Medicine', 4.6, 700, 'Consultations for sexual health and education, including symptoms of erectile dysfunction and relationship issues.'),
('Dr. Pooja Sharma', 'Stomach Specialist', 'MD in Gastroenterology', 4.5, 550, 'Get expert advice for stomach-related issues such as acid reflux, bloating, and chronic pain.'),
('Dr. Rahul Joshi', 'Gynaecology Specialist', 'MD in Gynaecology', 4.6, 550, 'Get expert advice for gynecological issues, including irregular menstruation, pelvic pain, and hormonal imbalances.'),
('Dr. Sneha Rao', 'Dermatologic Specialist', 'MD in Dermatology', 4.5, 550, 'Get expert advice for acne-related issues and skin care, including symptoms of severe breakouts and scarring.'),
-- Add more records as needed
('Dr. Deepak Verma', 'General Physician', 'MBBS', 4.5, 399, 'Consult a general physician for routine health check-ups and guidance on general health concerns.'),
('Dr. Tanu Sharma', 'Mental Wellness', 'MD in Psychiatry', 4.7, 599, 'Specialist consultation for mental health and wellness, including symptoms like anxiety, depression, and stress.'),
('Dr. Ashish Kumar', 'Coughing Specialist', 'MD in Pulmonology', 4.6, 450, 'Get help with persistent coughing, wheezing, and shortness of breath from a qualified specialist.'),
('Dr. Neha Gupta', 'Irregular Periods', 'MD in Gynaecology', 4.6, 499, 'Consult for irregular and painful periods, including symptoms such as heavy bleeding or missed cycles.'),
('Dr. Arjun Bhatia', 'Kidney Specialist', 'MD in Nephrology', 4.7, 650, 'Expert consultations for kidney health, symptoms include back pain, blood in urine, or swelling in extremities.'),
('Dr. Shalini Verma', 'Pediatric Specialist', 'MD in Pediatrics', 4.8, 650, 'Expert consultations for children\'s health, covering issues like developmental delays, allergies, and infections.'),
('Dr. Sanjeev Singh', 'Sexology Specialist', 'MD in Sexual Medicine', 4.5, 700, 'Consultations for sexual health and education, including symptoms of erectile dysfunction and relationship issues.'),
('Dr. Priyanka Desai', 'Stomach Specialist', 'MD in Gastroenterology', 4.6, 550, 'Get expert advice for stomach-related issues such as acid reflux, bloating, and chronic pain.'),
('Dr. Raghav Joshi', 'Gynaecology Specialist', 'MD in Gynaecology', 4.7, 550, 'Get expert advice for gynecological issues, including irregular menstruation, pelvic pain, and hormonal imbalances.'),
('Dr. Nidhi Mehta', 'Dermatologic Specialist', 'MD in Dermatology', 4.4, 550, 'Get expert advice for acne-related issues and skin care, including symptoms of severe breakouts and scarring.');

-- Repeat above inserts to reach 100 records, modifying names as necessary.
