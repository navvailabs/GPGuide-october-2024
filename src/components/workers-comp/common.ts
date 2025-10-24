export type CapacityStatus = 'fit' | 'modified' | 'unfit';

export interface WorkersCompState {
  // Step 1: Injury Details
  injuryType: string;
  injuryDetails: string;
  diagnosis: string;

  // Step 2: Work Capacity
  capacityStatus: CapacityStatus;
  restrictions: string[];
  hoursPerDay: number;
  daysPerWeek: number;
  suitableDuties: string;
  reviewIn: string;

  // Step 3: Treatment Plan
  medications: string[];
  referrals: string[];
  investigations: string[];
  interventions: string[];
  followUp: string;
}

export const initialWorkersCompState: WorkersCompState = {
  injuryType: '',
  injuryDetails: '',
  diagnosis: '',
  capacityStatus: 'modified',
  restrictions: [],
  hoursPerDay: 4,
  daysPerWeek: 3,
  suitableDuties: '',
  reviewIn: '2 weeks',
  medications: [],
  referrals: [],
  investigations: [],
  interventions: [],
  followUp: '2 weeks',
};

export const shoulderStrainScenario: Partial<WorkersCompState> = {
    injuryType: 'Strain/Sprain',
    injuryDetails: 'Patient reports acute pain in the right shoulder after lifting a heavy object at work. Examination reveals tenderness over the supraspinatus tendon and painful arc on abduction.',
    diagnosis: 'Right shoulder rotator cuff strain',
    capacityStatus: 'modified',
    restrictions: ['No lifting >5kg', 'No overhead work'],
    suitableDuties: 'Suitable for sedentary or light duties. No use of right arm for lifting or reaching overhead.',
    reviewIn: '2 weeks',
    medications: ['Ibuprofen 400mg TDS PRN'],
    referrals: ['Physiotherapy'],
    interventions: ['Rest & activity modification', 'Ice therapy'],
    followUp: '2 weeks',
};

export const backPainScenario: Partial<WorkersCompState> = {
    injuryType: 'Strain/Sprain',
    injuryDetails: 'Patient experienced sudden onset of severe lower back pain while lifting a heavy box. Pain radiates to the right buttock. Examination shows lumbar muscle spasm and reduced range of motion.',
    diagnosis: 'Acute lumbar strain with muscle spasm',
    capacityStatus: 'modified',
    restrictions: ['No lifting >2kg', 'No bending/twisting', 'No prolonged sitting'],
    suitableDuties: 'Can perform duties at a standing desk. May sit for 15-minute intervals. Avoid all lifting and bending.',
    reviewIn: '1 week',
    medications: ['Ibuprofen 400mg TDS', 'Paracetamol 1g QID'],
    referrals: ['Physiotherapy'],
    interventions: ['Rest & activity modification', 'Heat therapy'],
    followUp: '1 week',
};
