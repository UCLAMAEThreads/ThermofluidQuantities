var documenterSearchIndex = {"docs":
[{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"EditURL = \"<unknown>/literate/0-UnitsAndQuantities.jl\"","category":"page"},{"location":"manual/0-UnitsAndQuantities/#Fluid-properties,-flow-quantities,-and-units","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"","category":"section"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"In this notebook, we will discuss fluid properties and flow quantities, and the systems of units we use for them. First, some basic definitions:","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Fluid properties are properties of the material (the fluid)\nFlow quantities are characteristics of the flow of this fluid","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"We will also introduce some syntax we will use in this notebook and those that follow for dealing with units.","category":"page"},{"location":"manual/0-UnitsAndQuantities/#Set-up-the-module","page":"Fluid properties, flow quantities, and units","title":"Set up the module","text":"","category":"section"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"using ThermofluidQuantities","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"We will generally focus on SI units, and these will be the default system for displaying quantities. However, we also need to be familiar with Imperial (sometimes called \"English\") units, which arise in many situations in engineering. In the examples below, we will show that the tools in these notebooks allow us to easily convert from one system to another.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"For any quantity, we can see what the default units are by using default_unit. For example, for pressure,","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"default_unit(Pressure)","category":"page"},{"location":"manual/0-UnitsAndQuantities/#Fluid-properties","page":"Fluid properties, flow quantities, and units","title":"Fluid properties","text":"","category":"section"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Let's start by discussing the basic properties of a fluid.","category":"page"},{"location":"manual/0-UnitsAndQuantities/#Density","page":"Fluid properties, flow quantities, and units","title":"Density","text":"","category":"section"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"The density provides a measure of the amount of fluid material per unit volume. It is measured in units of mass/volume:","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"default_unit(Density)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"For example, the density of water at a reference temperature of 15.6 degrees C is","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Density(Water)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"and for air at temperature of 15 degrees C and pressure of 1 atmosphere is","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Density(Air)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Notice that water is around 800 times denser than air. This fact is very important in fluid mechanics!","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Remember that the density of gases, like air, depend on pressure and temperature (by the ideal gas law), so the density of a gas may be sensitive to the local conditions. This will happen in flows traveling relatively fast ([Q: compared to what?]). In such a case, density is a flow quantity, not a fluid property, and we have to determine its value as part of the problem.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"However, when a gas is traveling relatively slow [Q: compared to what?], we can often treat a gas as having constant density, so it can be treated as a fluid property.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"And liquid density is generally not sensitive. In fact, usually we can assume that the density in a liquid is constant and uniform. We can treat density in a liquid as a fluid property rather than a flow quantity.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Also note that the density of seawater is larger (at average salt concentration) than that of freshwater","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Density(Seawater)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"What if we want to set the density in other units? For example, in imperial units, we would usually set it with lbm/ft^3. (In the notebooks, we use lbm for pound (mass), and lbf is used for pound (force).) To set the units of a quantity, rather than rely on the default units, we use the syntax to follow the number with  u\"units\". It will automatically convert it to the default units. For example, 2 lb/ft^3:","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Density(2u\"lbm/ft^3\")","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"and to report the value of a quantity in other units, we use the value function. For example, to get the density of water in lb/ft^3:","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"value(Density(Water),u\"lbm/ft^3\")","category":"page"},{"location":"manual/0-UnitsAndQuantities/#Viscosity","page":"Fluid properties, flow quantities, and units","title":"Viscosity","text":"","category":"section"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"The internal friction in the fluid, called the viscosity (or, more specifically, the dynamic viscosity), given by the Greek symbol mu. [We can get this symbol by typing \\mu+TAB.] The viscosity controls the relationship between shear stress  tau (the frictional force per unit area) and the strain rate, given by the gradient of velocity, mathrmdumathrmdy. This latter quantity measures the difference in speeds in adjacent layers of fluid, and larger differences suggest more shear stress. Viscosity is the proportionality constant","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"tau = mu dfracmathrmdumathrmdy","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"We will learn much more about viscosity later, but for now, it is sufficient to know that viscosity has units of kg/m/s:","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"μw = Viscosity(Water)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"μa = Viscosity(Air)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Note that water is much more viscous the air:","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"μw/μa","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"This is probably intuitive to you. Note that both of these viscosities are much smaller than that of glycerin:","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Viscosity(Glycerin)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"We will also occasionally make use of the ratio between viscosity and density. This is called the kinematic viscosity. We use the symbol nu for this [obtained by typing \\mu+TAB.]","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"νw = KinematicViscosity(Water)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"νa = KinematicViscosity(Air)","category":"page"},{"location":"manual/0-UnitsAndQuantities/#Surface-tension","page":"Fluid properties, flow quantities, and units","title":"Surface tension","text":"","category":"section"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"The surface tension is a property associated with liquid interfaces, and particularly, liquid interfaces with gases. The surface tension has units of force per unit length, because if we imagine \"cutting\" a bit of the interface from the rest of it, then this cut would form a perimeter of the snipped part of the interface, and surface tension would act along this perimeter, representing how much the rest of the liquid interface was pulling on it.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Surface tension also happens to have units of energy per unit area, so it is sometimes referred to as \"surface energy\". Different liquids have different surface energies, depending on the strength of their inter-molecular forces.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"SurfaceTension(Water)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"SurfaceTension(Glycerin)","category":"page"},{"location":"manual/0-UnitsAndQuantities/#Flow-quantities","page":"Fluid properties, flow quantities, and units","title":"Flow quantities","text":"","category":"section"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Now, let's discuss quantities that describe the fluid flow, or at least, the state of the fluid. It is important to understand that these quantities are, in general, field quantities: they vary from location to location, and perhaps vary over time. So each of them should be thought of as a function of the spatial coordinates, (xyz) and time t. Finding these functions is often our ultimate goal in solving a problem.","category":"page"},{"location":"manual/0-UnitsAndQuantities/#Pressure","page":"Fluid properties, flow quantities, and units","title":"Pressure","text":"","category":"section"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Pressure represents the average force that the molecules exert per unit area of surface. It is important to understand that pressure acts the same in every direction. That is, it is an isotropic quantity. This means that, no matter what the orientation of the surface, the pressure acts the same on it, and further, it only acts perpendicular to the surface.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"The default SI unit of pressure is the Pascal (Pa, equal to 1 N/m^2, or 1 kg/m/s^2).","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Pressure(20)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"But there are many other units for pressure in use. Some common ones. The atmosphere (atm) represents the standard ambient pressure.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"p = Pressure(1u\"atm\")","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"So 1 atm is about 101325 Pa, or 101.325 kPa. Let's see this written in other units","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"value(p,u\"psi\")","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"value(p,u\"mmHg\")","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"These are all absolute pressures. For many of the flows we will study, the absolute pressure will not be important. Consider, for example, the flow of water through a pipe. Only the difference between the pressure at the inlet and the pressure at the outlet matters for driving this flow; the absolute pressure is irrelevant. So we can also define a PressureDifference, measured in the same units:","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"PressureDifference(50)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"Pressure is a flow quantity. In general, we need to find its values as part of the problem.","category":"page"},{"location":"manual/0-UnitsAndQuantities/#Velocity","page":"Fluid properties, flow quantities, and units","title":"Velocity","text":"","category":"section"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"The velocity of the fluid describes how fast it is moving in each direction, and has units of length/time.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"u = Velocity(20)","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"In other units,","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"value(u,u\"cm/s\")","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"value(u,u\"ft/s\")","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"We know that velocity is a vector, so it has, in general, three components (uvw). It is also a field quantity. This means that each of the three components depends on (xyz) and t. That's a lot of detail to determine, but once we determine it, we know everything about a fluid flow.","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"","category":"page"},{"location":"manual/0-UnitsAndQuantities/","page":"Fluid properties, flow quantities, and units","title":"Fluid properties, flow quantities, and units","text":"This page was generated using Literate.jl.","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"EditURL = \"<unknown>/literate/1-VelocityProfiles.jl\"","category":"page"},{"location":"manual/1-VelocityProfiles/#Velocity-profiles","page":"Velocity profiles","title":"Velocity profiles","text":"","category":"section"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"In this notebook, we will discuss a useful way to visualize a flow in fluid mechanics: the velocity profile.","category":"page"},{"location":"manual/1-VelocityProfiles/#Set-up-the-module","page":"Velocity profiles","title":"Set up the module","text":"","category":"section"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"using ThermofluidQuantities","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"using Plots","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"To start, let's consider one of the most basic types of flow: the linear shear flow, often called Couette flow. This type of flow is generated, for example, between two parallel walls when one wall is moving and the other is stationary. In the figure below, the top wall is moving with velocity U, the lower wall is stationary:","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"<img src=\"https://raw.githubusercontent.com/UCLAMAEThreads/MAE103/master/notebook/Couette.svg\" alt=\"velocity profile\" width=\"300\" align=\"center\"/>","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"Because of the no-slip condition, the fluid next to each wall moves with it. The fluid next to the upper wall moves at velocity U, the fluid next to the lower wall is at rest.","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"The velocity profile depicts u(y), the horizontal component of velocity as a function of vertical position, y. This increases linearly from the lower to the upper wall. In fact, the function is just","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"u(y) = UyH","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"The arrows indicate the direction that the fluid is moving, and the lengths of the arrows indicate the relative speed at that y position.","category":"page"},{"location":"manual/1-VelocityProfiles/#Plotting-velocity-profiles","page":"Velocity profiles","title":"Plotting velocity profiles","text":"","category":"section"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"The arrows are helpful, but you can also plot a velocity profile without them. For example, consider the following velocity:","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"u(y) = frac4U_cH^2 y (H - y)","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"The coefficient U_c is a speed, and H is the gap height. Let's define a function that evaluates this velocity. Here, y, Uc, and H are to be given as arguments to the function.","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"u(y,Uc,H) = 4*Uc/H^2*y*(H-y)","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"Suppose the gap height H is 1 cm and the speed U_c is 1 m/s. We will evaluate this velocity at a range of locations between 0 and H:","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"H = 1u\"cm\"  # 1 cm = 0.01 m\nUc = 1u\"m/s\"\ny = range(0u\"cm\",H,length=101) # 101 points to evaluate at, just to make it look smooth.","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"Now we evaluate the velocity function at the range of y locations. (Remember that the . vectorizes the evaluation of a function.)","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"v = Velocity.(u.(y,Uc,H))","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"Notice that u is 0 at the beginning and end of the range. Let's plot it. But let's plot it as a velocity profile, which means we make u the 'x' axis and y the 'y' axis.","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"plot(v,y,xlim=(0u\"m/s\",2Uc),ylim=(0u\"cm\",H),\n    legend=false,xlabel=\"u(y)\",ylabel=\"y\")","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"The top and bottom of this plot suggest that these are stationary walls where the flow is at rest. In fact, this is the velocity profile associated with pressure-driven flow through the gap.","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"","category":"page"},{"location":"manual/1-VelocityProfiles/","page":"Velocity profiles","title":"Velocity profiles","text":"This page was generated using Literate.jl.","category":"page"},{"location":"#ThermofluidQuantities.jl","page":"Home","title":"ThermofluidQuantities.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"basic tools and definitions of quantities in thermofluids problems","category":"page"},{"location":"","page":"Home","title":"Home","text":"The purpose of this package is to enable easy setup of quantities in thermofluids problems. It contains","category":"page"},{"location":"","page":"Home","title":"Home","text":"A large set of specialized types based on common thermofluid quantities (e.g. Velocity, Pressure, etc) that enable dispatch on these quantities\nTreatment of typical units, using the Unitful package.\nPredefined properties for various common gases and liquids\nPlot recipes for the associated types","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package works on Julia 1.0 and higher and is registered in the general Julia registry. To install, type","category":"page"},{"location":"","page":"Home","title":"Home","text":"]add ThermofluidQuantities","category":"page"},{"location":"","page":"Home","title":"Home","text":"Then type","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using ThermofluidQuantities","category":"page"},{"location":"","page":"Home","title":"Home","text":"The plots in this documentation are generated using Plots.jl. You might want to install that, too, to follow the examples.","category":"page"}]
}