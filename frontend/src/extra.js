const anonymousRule = () => (!token ? undefined : '/');
const protectedRule = () => (token ? undefined : '/login');
const patientRule = (user: Patient) => (user ? undefined : '/login');
const verifiedRule = (user: Patient) => (user && user.verifiedAt ? undefined : '/verify-email');
const PatientRuleRoute = ({
path,
Component,
rules,
...rest
}: {
path: string;
Component: React.FunctionComponent | PatientProviderStateComponent;
rules: ((user: Patient) => string | undefined)[];
}): ReactElement => {
const { patient } = useApplicationContext();

if (!patient) {
return <Redirect to={{ pathname: '/home' }} />;
}

const redirectOrUndefined = rules.map((rule) => rule(patient)).find((result) => result !== undefined);

if (redirectOrUndefined) {
return <Redirect to={{ pathname: redirectOrUndefined }} />;
}

const PatientComponent = Component as PatientStateComponent;
return <Route exact path={path} render={() => <PatientComponent patient={patient} {...rest} />} />;
};
<BrowserRouter>
<Switch>
<RuleRoute path="/home" Component={Home} rules={[anonymousRule]} />
<RuleRoute path="/login" Component={LogIn} rules={[anonymousRule]} />
<RuleRoute path="/register" Component={Register} rules={[anonymousRule]} />
<RuleRoute path="/forgot-password" Component={ForgotPassword} rules={[anonymousRule]} />
</Switch>
</BrowserRouter>